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
    transition('* => in', animate('1500ms ease-in'))
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
    transition('* => in', animate('1500ms 1000ms ease-in'))
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
    transition('* <=> in', animate('1000ms ease-in-out', keyframes([
        style({backgroundColor: '#fff', transform: 'translateY(-100%)', offset: 0 }),
        style({backgroundColor: '#00e5ff', transform: 'translateY(0px)', offset: 0.3 }),
        style({backgroundColor: '#00b8d4', transform: 'translateY(-10%)', offset: 0.6 }),
        style({backgroundColor: '#00e5ff', transform: 'translateY(0px)', offset: 1.0 })
    ])))
]);
