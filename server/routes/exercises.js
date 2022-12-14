const router = require('express').Router();
var Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error', err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error', err));
});

router.route('/add').post((req, res) => {
    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: Date.parse(req.body.date)
    });

    newExercise.save()
        .then(() => res.json('Exercise added Successfully!'))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise Deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = req.body.duration;
            exercise.date = Date.parse(req.body.date);
            
            exercise.save()
            .then(()=> res.json('Exercise Updated!'))
            .catch(err=> res.status(400).json('Error'+err));
        })
        .catch(err=>res.status(400).json('Error'+err));
});



module.exports = router;