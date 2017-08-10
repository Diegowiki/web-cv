import { trigger, state, style, transition, animate, keyframes } from '@angular/core';


export const slideIn = trigger('slideIn', [
    state('*', style({
        transform: 'translateX(200%)',
    })),
    state('in', style({
        transform: 'translateX(0)',
    })),
    transition('* => in', animate('1000ms 100ms ease-in'))
]);
export const slideInDelay = trigger('slideInDelay', [
    state('*', style({
        transform: 'translateX(-200%)',
    })),
    state('in', style({
        transform: 'translateX(0)',
    })),
    transition('* => in', animate('1000ms 700ms ease-in'))
]);

export const slideDown = trigger('slideDown', [
    state('*', style({
        transform: 'translateY(-100%)',
        backgoundColor: '#fff'
    })),
    state('in', style({
        transform: 'translateY(0)',
        backgoundColor: '#00e5ff'
    })),
    transition('* <=> in', animate('500ms linear', keyframes([
        style({backgroundColor: '#fff', transform: 'translateY(-100%)', offset: 0 }),
        style({backgroundColor: '#00e5ff', transform: 'translateY(0px)', offset: 1 })
    ])))
]);

export const slideCard1 = trigger('slideCard1', [
    state('*', style({
        transform: 'translateY(-600%)',
    })),
    state('in', style({
        transform: 'translateY(0)',
        // backgoundColor: '#00e5ff'
    })),
    transition('* <=> in', animate('600ms 1500ms ease-in-out'))
]);

export const slideDownAvatar = trigger('slideDownAvatar', [
    state('*', style({
        transform: 'translateY(-400%)',
    })),
    state('in', style({
        transform: 'translateY(0)',
        // backgoundColor: '#00e5ff'
    })),
    transition('* <=> in', animate('500ms 2000ms ease-in-out'))
]);

