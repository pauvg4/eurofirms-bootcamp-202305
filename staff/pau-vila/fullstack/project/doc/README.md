# TORNORECICLA

## Intro

The application will be dedicated to restore and recycle furniture or old wooden things, through content type publications such as photo posts or videos with their descriptions or workshops where people can sign up and attend classes to create, recycle or refurbished it again.

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWw2Z21ycnFsam8zN2xnenBtcjVyZGQweDl5em43eHNzOHZpMGlyaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2Sq8IqBPzebjaK3e/giphy.gif)
![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVlMHJnc3M2bTB1NHUzaWg4enRhbHlkNHY5OWF2cGozMGhieW9haiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Zt9dlb7BcMUVvq0/giphy.gif)

## Functional Description

The main purpose and key benefits for users of this app is to be able to share their artwork and how they have done it.
This purpose will be achieved using posts from different users, showed in a list form. Obviously saving others fields like creation date, post author, and so on.

### Use Cases

- publish artwork or workshop
- view artworks or workshops
- update artwork or workshop
- delete artwork or worshop
- join/unjoin to workshop
- search artworks or workshops

### UI Design

link to [Figma](https://www.figma.com/file/TdA6yV7wdohCTHKGBbQcDx/Untitled?type=design&node-id=0%3A1&mode=design&t=b37PdMVwXjFVEXcN-1)

## Technical Description:

 ### Data Model

The main models of the app will include the following schemes

User
- name (String, required)
- email (String, required, unique)
- password (String, required, minLength: 8)
- region ZIP code (String, optional)
- phone (String, optional)
- favs (ObjectId, ref Artwork)
- creation date (Date)

Artwork 
- author (ObjectId, ref 'User', required)
- image (photo file, optional)
- video (String: youtube URL or similar, optional)
- description  (String, required)
- type  (String, required)
- materials  ([String], required),
- creationDate  (Date, required)
- modificationDate  (Date, optional)

Workshop 
- attendants (Array of User id, required)
- place (String, required)
- ZIP code (String, required)
- date start (Date, required)
- date end (Integer, required)
- image (photo file, optional)
- video (String: youtube URL or similar, optional)
- description  (String, required)


