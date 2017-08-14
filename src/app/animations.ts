import { trigger, state, style, transition, animate, keyframes } from '@angular/core';


export const slideIn = trigger('slideIn', [
    state('*', style({
        transform: 'translateX(200%)',
    })),
    state('in', style({
        transform: 'translateX(0)',
    })),
    transition('* => in', animate('600ms 200ms ease-in'))
]);
export const slideInDelay = trigger('slideInDelay', [
    state('*', style({
        transform: 'translateX(-200%)',
    })),
    state('in', style({
        transform: 'translateX(0)',
    })),
    transition('* => in', animate('600ms 200ms ease-in'))
]);

export const slideDown = trigger('slideDown', [
    state('*', style({
        transform: 'translateY(-100%)',
    })),
    state('in', style({
        transform: 'translateY(0)',
    })),
    transition('* <=> in', animate('300ms ease-in', keyframes([
        style({ transform: 'translateY(-100%)', offset: 0 }),
        style({ transform: 'translateY(0px)', offset: 1 })
    ])))
]);

export const slideCard1 = trigger('slideCard1', [
    state('in', style({
        transform: 'translateY(0)',
    })),
    state('void', style({
        transform: 'translateY(-100vh)',
        opacity: 0,
    })),
    transition('void <=> in', animate('500ms ease-in-out')
    )
]);

export const slideDownAvatar = trigger('slideDownAvatar', [
    state('*', style({
        transform: 'TranslateX(-100%)',
    })),
    state('in', style({
        transform: 'TranslateX(0)',
        // backgoundColor: '#00e5ff'
    })),
    transition('* <=> in', animate('500ms 1000ms linear', keyframes([
        style({ transform: 'TranslateX(2%)', offset: 0.7 }),
        style({ transform: 'TranslateX(0)', offset: 1 })
    ])))
]);

export const fadeInModal = trigger('fadeInModal', [
    state('*', style({
        opacity: '0',
    })),
    state('in', style({
        opacity: '1',
        // backgoundColor: '#00e5ff'
    })),
    transition('* <=> in', animate('300ms linear'))
]);

export const fadeInModalContent = trigger('fadeInModalContent', [
    state('*', style({
        transform: 'scale(0)',

    })),
    state('in', style({
        transform: 'scale(1)',
        // backgoundColor: '#00e5ff'
    })),
    transition('* <=> in', animate('400ms ease-in'))
]);

