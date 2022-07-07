const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(
			`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
		);
	} catch (err) {
		console.error(
			`Error connecting to MongoDB: ${err.message}`.red.underline.bold
		);
		process.exit(1);
	}
};
module.exports = connectDB;
