import express from 'express';

export const app = express();
export function init() {
  app.use(express.urlencoded({ extended: true }));
  app.get('/', (req, res) => {
    const responseMessage = 'Service up and running!';
    console.log('Health check api called', req.query);
    if (req.query.json) {
      return res.json({ data: responseMessage });
    }
    return res.send(responseMessage);
  });

  if (process.env.NODE_ENV !== 'test') {
    app.listen(9000);
  }
}
init();
