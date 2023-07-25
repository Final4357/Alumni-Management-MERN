import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import rateLimit from'express-rate-limit'
import helmet from'helmet'
import mongoSanitize from'express-mongo-sanitize'
import xss from'xss-clean'
import hpp from'hpp'

import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import chatRouter from './routes/chat.js'
import messageRouter from './routes/message.js'
import jobRouter from './routes/job.js'
import eventRouter from './routes/event.js'
import newsRouter from './routes/news.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser())
app.use(express.json({ limit: '50mb' }))

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRouter);
app.use('/api/job', jobRouter);
app.use('/api/event', eventRouter);
app.use('/api/news', newsRouter);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something wents wrong."
    return res.status(errorStatus).json({
      success : false,
      status : errorStatus,
      message : errorMessage,
      stack : err.stack,
    });
  });

export default app