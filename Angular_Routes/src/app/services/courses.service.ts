import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    constructor() { }
    courses = [
        {
            id: 1,
            name: 'Java Script',
            image: 'assets/javascript.png',
            description: 'Learn the basics of web development, including HTML, CSS, and JavaScript.'
        },
        {
            id: 2,
            name: 'Angular',
            image: 'assets/angular.png',
            description: 'Get started with Python programming language and learn its fundamentals.'
        },
        {
            id: 3,
            name: 'React',
            image: 'assets/react.png',
            description: 'Dive deeper into JavaScript programming with advanced techniques and concepts.'
        },
        {
            id: 4,
            name: 'Java Script',
            image: 'assets/javascript.png',
            description: 'Learn the basics of web development, including HTML, CSS, and JavaScript.'
        },
        {
            id: 5,
            name: 'Angular',
            image: 'assets/angular.png',
            description: 'Get started with Python programming language and learn its fundamentals.'
        },
        {
            id: 6,
            name: 'React',
            image: 'assets/react.png',
            description: 'Dive deeper into JavaScript programming with advanced techniques and concepts.'
        }
    ];

    getCourses() {
        return [
            {
                id: 1,
                name: 'JavaScript',
                image: 'assets/javascript.png',
                description: 'Learn the basics of web development'
            },
            {
                id: 2,
                name: 'Angular',
                image: 'assets/angular.png',
                description: 'Learn the basics of web development'
            },
            {
                id: 3,
                name: 'React',
                image: 'assets/react.png',
                description: 'Learn the basics of web development'
            },
            {
                id: 4,
                name: 'JavaScript',
                image: 'assets/javascript.png',
                description: 'Learn the basics of web development'
            },
            {
                id: 5,
                name: 'Angular',
                image: 'assets/angular.png',
                description: 'Learn the basics of web development'
            },
            {
                id: 6,
                name: 'React',
                image: 'assets/react.png',
                description: 'Learn the basics of web development'
            }
        ];
    }
}
