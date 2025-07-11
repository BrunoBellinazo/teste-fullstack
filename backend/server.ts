import 'dotenv/config';
import app from './src/app';

const PORT = process.env.PORT || 3001; /*porta do backend*/

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});