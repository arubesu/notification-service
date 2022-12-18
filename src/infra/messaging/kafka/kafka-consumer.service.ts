import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    const {
      KAFKA_NOTIFICATIONS_CLIENT_ID,
      KAFKA_NOTIFICATIONS_BROKER,
      KAFKA_NOTIFICATIONS_SASL_USERNAME,
      KAFKA_NOTIFICATIONS_SASL_PASSWORD,
    } = process.env;

    super({
      client: {
        clientId: KAFKA_NOTIFICATIONS_CLIENT_ID,
        brokers: [KAFKA_NOTIFICATIONS_BROKER!],
        sasl: {
          mechanism: 'scram-sha-256',
          username: KAFKA_NOTIFICATIONS_SASL_USERNAME!,
          password: KAFKA_NOTIFICATIONS_SASL_PASSWORD!,
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
