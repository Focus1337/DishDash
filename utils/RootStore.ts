import React from "react";

class RootStore {
    // todoViewModel: TodoStore;
    // logsStore: LogStore;
    // langStore: LangStore;
    //
    // constructor() {
    //     this.todoViewModel = new TodoStore();
    //     this.logsStore = new LogStore();
    //     this.langStore = new LangStore();
    // }
}

export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
