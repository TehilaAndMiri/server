const getPlaceById = async (req, res, next) => {

    const placeId = req.params.pid; // { pid: 'p1' }
  
  
    let place;
  
    try {
  
      place = await Place.findById(placeId);
  
    } catch (err) {
  
      const error = new HttpError(
  
        'Something went wrong, could not find a place.',
  
        500
  



        
      );
  
      return next(error);
  
    }
  
  
    if (!place) {
  
      const error = new HttpError(
  
        'Could not find a place for the provided id.',
  
        404
  
      );
  
      return next(error);
  
    }
  
  
    res.json({ place: place.toObject({ getters: true }) }); // => { place } => { place: place }
  
  };
  