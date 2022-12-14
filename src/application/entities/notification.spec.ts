import { Content } from './content';
import { Notification } from './notification';

describe('Notification Content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'new category',
      content: new Content('Foo notification'),
      recipientId: 'new-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
