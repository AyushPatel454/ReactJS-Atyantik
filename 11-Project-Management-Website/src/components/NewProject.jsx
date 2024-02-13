import Input from "./Input";

export default function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <Input label="Project Name" />
                <Input label="Project Description" textArea />
                <Input label="Due Date" />
            </div>
        </div>
    );
}