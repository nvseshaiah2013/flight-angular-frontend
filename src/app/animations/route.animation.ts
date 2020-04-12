import { trigger, state, style, transition, animate } from '@angular/animations';

export function expand() {
    return trigger('expand', [
        transition(':enter', [
            style({
                transform: 'scale(0.5)',
                opacity: 0
             }),
            animate('500ms ease-in', style({ opacity: 1, transform: 'scale(1.0)' }))
        ])
    ]);
}

export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({ opacity: 1, transform: 'translateX(0)' })),
        transition(':enter', [
            style({ transform: 'translateX(100%)', opacity: 0.5, filter: 'blur(1px)' }),
            animate('700ms ease-in')
        ]),
        transition(':leave', [
            animate('700ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0.5, filter:'blur(1px)' }))
        ])
    ]);
}


export function flyUpDown() {
    return trigger('flyUpDown', [
        state('*', style({ opacity: 1, transform: 'scale(1.0)' })),
        transition(':enter', [
            style({ transform: 'scale(0.5)', opacity: 0 }),
            animate('300ms ease-in')
        ]),
        transition(':leave', [
            animate('300ms ease-out', style({ transform: 'scale(0.5)', opacity: 0 }))
        ])
    ]);
}