$(function(){

    var model = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
            console.log(localStorage.notes)
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        },
        clearAllNotes: function(){
            localStorage.notes = JSON.stringify([]);
        }

    };


    var octopus = {
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr,
                //add date here 
                date:Date.now()
            });
            view.render();
        },

        getNotes: function() {
            
            if (localStorage.notes.length>500) {
                model.clearAllNotes();
            }
            return model.getAllNotes().reverse();
        },

        init: function() {
            model.init();
            view.init();
        }
    };


    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content +
                        +
                    '<span class=".note-date">'+
                    new Date(note.date).toString()+
                    '</span>'//add date to card
                    '</li>' 
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});