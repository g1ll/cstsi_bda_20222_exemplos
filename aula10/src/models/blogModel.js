import mongoose from 'mongoose';
import connection from '../database/connection'
import { blogSchema } from '../database/schemas/blogSchema';

connection()

const blogModel = mongoose.model('Blog', blogSchema);

export {blogModel}