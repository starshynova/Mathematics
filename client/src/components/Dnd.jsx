import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import './component.css';

const AnswerCard = ({ id, text }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "none",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="answer-card"
    >
      {text}
    </div>
  );
};

const DropZone = ({ onDrop }) => {
  const { setNodeRef } = useDroppable({
    id: "dropzone",
  });

  return (
    <div
      ref={setNodeRef}
      className="drop-zone"
    >
      Перетащи сюда
    </div>
  );
};

const Quiz = () => {
  const handleDragEnd = (event) => {
    if (event.over?.id === "dropzone") {
      alert("Ответ принят!");
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col items-center">
        <AnswerCard id="correct" text="Правильный ответ" />
        <AnswerCard id="wrong" text="Неправильный ответ" />
        <DropZone />
      </div>
    </DndContext>
  );
};

export default Quiz;
