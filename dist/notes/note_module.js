"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesModule = void 0;
const common_1 = require("@nestjs/common");
const note_services_1 = require("./note.services");
const note_controller_1 = require("./note.controller");
const typeorm_1 = require("@nestjs/typeorm");
const note_entity_1 = require("./note.entity");
let NotesModule = class NotesModule {
};
NotesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([note_entity_1.Note])],
        providers: [note_services_1.NotesService],
        controllers: [note_controller_1.NotesController],
    })
], NotesModule);
exports.NotesModule = NotesModule;
//# sourceMappingURL=note_module.js.map