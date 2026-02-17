export const kafkaConfig = {
  clientId: 'my-app',
  brokers: ['localhost:9092'],
  topic: 'user-registrations',
};

export const kafkaEvents = {
  USER_REGISTERED: 'user_registered',
};
