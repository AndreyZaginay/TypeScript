export interface Animal {
    readonly name: string;
    can_fly: boolean;
    can_swin: boolean;
    move: () => void;
    makeSound?: () => void;
    showInfo: () => void; 
}