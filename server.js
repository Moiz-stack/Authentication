require('dotenv').config();
const express= require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');


const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(()=>[
    console.log("Connected to MongoDB"),
])
.catch((err)=>[
    console.log(err),
]);

app.use('/api/auth',authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

