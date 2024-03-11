import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type NativeStackParamList = {
    Welcome: undefined;
    // TodoItem: { itemId: string };
    // DoneList: undefined;
    // Logs: undefined;
};

// export type TodoItemScreenProps = NativeStackScreenProps<NativeStackParamList, 'TodoItem'>;
export type WelcomeScreenProps = NativeStackScreenProps<NativeStackParamList, 'Welcome'>;
// export type DoneListScreenProps = NativeStackScreenProps<NativeStackParamList, 'DoneList'>;
// export type LogsScreenProps = NativeStackScreenProps<NativeStackParamList, 'Logs'>;
