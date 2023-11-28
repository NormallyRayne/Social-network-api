# Social Network API 

## Overview

This Social Network API provides a platform for managing users, thoughts, reactions, and friend connections. The API utilizes MongoDB as its database and Mongoose models to define the structure of the data.

## Video

https://www.youtube.com/watch?v=w41tfhrxDKs

## Getting Started

To run the application, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone git@github.com:NormallyRayne/Social-network-api.git
```

2. Navigate to the project directory.

```bash
cd social-network-api
```

3. Install dependencies.

```bash
npm install
```

4. Start the server and sync Mongoose models with the MongoDB database.

```bash
npm start
```

## API Routes

### GET Routes

#### Users

- `/api/users`: Get a list of all users.
- `/api/users/:userId`: Get a specific user by ID.

#### Thoughts

- `/api/thoughts`: Get a list of all thoughts.
- `/api/thoughts/:thoughtId`: Get a specific thought by ID.

### POST Routes

#### Users

- `/api/users`: Create a new user.

#### Thoughts

- `/api/thoughts`: Create a new thought.

### PUT Routes

#### Users

- `/api/users/:userId`: Update a user by ID.

#### Thoughts

- `/api/thoughts/:thoughtId`: Update a thought by ID.

### DELETE Routes

#### Users

- `/api/users/:userId`: Delete a user by ID.

#### Thoughts

- `/api/thoughts/:thoughtId`: Delete a thought by ID.

### Reactions

- `/api/thoughts/:thoughtId/reactions`: Add or delete a reaction to a thought.

### Friends

- `/api/users/:userId/friends`: Add or remove friends from a user's friend list.

## Testing with Insomnia

1. Open Insomnia and import the provided workspace file.

2. Test the API routes using the available CRUD operations for users, thoughts, reactions, and friends.

## Example Usage

### Creating a User

Send a POST request to `/api/users` with the following JSON body:

```json
{
  "username": "john_doe",
  "email": "john@example.com"
}
```

### Creating a Thought

Send a POST request to `/api/thoughts` with the following JSON body:

```json
{
  "thoughtText": "This is an interesting thought!",
  "username": "john_doe"
}
```

### Adding a Reaction to a Thought

Send a POST request to `/api/thoughts/:thoughtId/reactions` with the following JSON body:

```json
{
  "reactionBody": "👍",
  "username": "john_doe"
}
```

### Adding a Friend

Send a POST request to `/api/users/:userId/friends` with the following JSON body:

```json
{
  "friendId": "friend_username"
}
```

### Deleting a Thought

Send a DELETE request to `/api/thoughts/:thoughtId`.

### Removing a Reaction from a Thought

Send a DELETE request to `/api/thoughts/:thoughtId/reactions` with the following JSON body:

```json
{
  "reactionId": "reaction_id"
}
```

### Removing a Friend

Send a DELETE request to `/api/users/:userId/friends` with the following JSON body:

```json
{
  "friendId": "friend_username"
}
```

## Note

Make sure to replace placeholder values like `:userId`, `:thoughtId`, `friend_username`, and `reaction_id` with actual values when testing the API.

Feel free to explore and customize the API for your specific use case!