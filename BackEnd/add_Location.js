app.post('/locations', async (req, res) => {
    try {
      const newLocation = await Location.create(req.body);
      res.status(201).json(newLocation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  //Add Location
  app.post('/add-location', async (req, res) => {
    try {
      const { latitude, longitude, date, time } = req.body;
  
      const newLocation = await Location.create({ latitude, longitude, date, time });
      res.status(201).json(newLocation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
