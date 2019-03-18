const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    Completed: {
        type: Boolean
    },
    CompletedAt: {
        type: Number
    }
});

const newTodo = new Todo({
    text: 'Cook lunch'
});

newTodo.save().then((doc) => {
    console.log('Saved to do', (doc));
}, (e) => {
    console.log('Unable to save', e);
});


const otherTodo = new Todo({
    text: 'Feed the cat',
    Completed: true,
    CompletedAt: 123
});


otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2))
}, (e) => {
    console.log('Unable to save', e)
});