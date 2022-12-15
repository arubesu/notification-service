import { Notification as PrismaNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(notification: PrismaNotification): Notification {
    const {
      id,
      category,
      content,
      recipientId,
      readAt,
      canceledAt,
      createdAt,
    } = notification;

    return new Notification(
      {
        category,
        content: new Content(content),
        recipientId,
        readAt,
        canceledAt,
        createdAt,
      },
      id,
    );
  }
}
