import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnect) {
    console.log('Already connected');
    return;
  }
  if (mongoose.connections.lenght > 0) {
    connection.isConnect = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Use previus connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopoly: true,
    useCreateIndex: true,
  });
  console.log('New connection');
  connection.isConnected = db.connections[0].readyState;
}
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('Not disconnected');
    }
  }
}

const db = { connect, disconnect };
export default db;