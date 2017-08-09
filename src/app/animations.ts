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
    transition('* => in', animate('1500ms ease-in', keyframes([
        style({ transform: 'translateX(100%)', offset: 0 }),
        style({ transform: 'translateX(-2%)', offset: 0.9 }),
        style({ transform: 'translateX(0px)', offset: 1 })
    ])))
]);
export const slideInDelay = trigger('slideInDelay', [
     state('*', style({
        transform: 'translateX(100%)',
    })),
    state('in', style({
        transform: 'translateX(0)',
    })),
    state('out', style({
        transform: 'translateX(-100%)',
    })),
    transition('* => in', animate('2000ms ease-in', keyframes([
        style({ transform: 'translateX(100%)', offset: 0 }),
        style({ transform: 'translateX(-1%)', offset: 0.9 }),
        style({ transform: 'translateX(0px)', offset: 1.0 })
    ])))
]);

export const slideDown = trigger('slideDown', [
     state('*', style({
        transform: 'translateY(100%)',
    })),
    state('in', style({
        transform: 'translateY(0)',
    })),
    state('out', style({
        transform: 'translateY(-100%)',
    })),
    transition('* => in', animate('2000ms ease-in', keyframes([
        style({ transform: 'translateY(100%)', offset: 0 }),
        style({ transform: 'translateY(-1%)', offset: 0.9 }),
        style({ transform: 'translateY(0px)', offset: 1.0 })
    ])))
]);
