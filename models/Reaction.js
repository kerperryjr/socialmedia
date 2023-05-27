const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionBody: {
        type: String, 
        required: true, 
        maxLength: 280,
      },
      createdAt:{ 
        type: Date, default: Date.now 
        }, 
      
      username: {
        String,
        required: true,
      },
     
      reactionId: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
   
    },
    {
      // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
      // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  // Create a virtual property `fullName` that gets and sets the user's full name
  userSchema
    .virtual('fullName')
    // Getter
    .get(function () {
      return `${this.first} ${this.last}`;
    })
    // Setter to set the first and last name
    .set(function (v) {
      const first = v.split(' ')[0];
      const last = v.split(' ')[1];
      this.set({ first, last });
    });
  
  // Initialize our User model
  const User = model('user', userSchema);
  
  module.exports = Reaction;