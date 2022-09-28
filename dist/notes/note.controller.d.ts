import { Note } from './note.entity';
import { NotesService } from './note.services';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    findAll(): Promise<Note[]>;
    findOne(id: any): Promise<Note>;
    create(note: Note): Promise<void>;
    editNote(note: Note, id: number): Promise<Note>;
    remove(id: any): void;
}
