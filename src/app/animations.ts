import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const slideIn = trigger('slideIn', [
    state('*', style({
        transform: 'translateX(100%)',
    })),
    state('in', style({
        transform: 'translateX(0)',
    })),
    state('out', style({
        transform: 'translateX(-100%)',
    })),
    transition('* => in', animate('700ms 150ms ease-in'))
]);
export const slideInDelay = trigger('slideInDelay', [
    state('*', style({
        transform: 'translateX(-100%)',
    })),
    state('in', style({
        transform: 'translateX(0)',
    })),
    state('out', style({
        transform: 'translateX(100%)',
    })),
    transition('* => in', animate('600ms 720ms ease-in'))
]);

export const slideDown = trigger('slideDown', [
    state('*', style({
        transform: 'translateY(-100%)',
        backgoundColor: '#f50057'
    })),
    state('in', style({
        transform: 'translateY(0)',
        backgoundColor: '#00e5ff'
    })),
    transition('* <=> in', animate('600ms ease-in', keyframes([
        style({backgroundColor: '#f50057', transform: 'translateY(0px)', offset: 0.3 }),
        style({backgroundColor: '#ff80ab', transform: 'translateY(-10%)', offset: 0.6 }),
        style({backgroundColor: '#00e5ff', transform: 'translateY(0px)', offset: 1.0 })
    ])))
]);
