import mongoose from 'mongoose';

const connect = ()=> mongoose.connect('mongodb://localhost:27017/mongoose');

export default connect