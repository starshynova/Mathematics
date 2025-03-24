import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import useGenerateAnswer from "../hooks/useGenerateAnswer.jsx";
import "./component.css";

const AnswerCard = ({ id, text, isDropped, isDragging }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : "none",
    transition: isDragging ? "none" : "transform 0.3s ease-in-out",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`answer-card ${isDropped ? "empty-card" : ""}`}
      style={style}
    >
      {isDropped ? "" : text}
    </div>
  );
};

const DropZone = ({ droppedAnswer }) => {
  const { setNodeRef } = useDroppable({ id: "dropzone" });

  return (
    <div ref={setNodeRef} className="drop-zone">
      {droppedAnswer ? (
        <div className="dropped-card" style={{ color: "#000000" }}>
          {droppedAnswer.value.toString()}
        </div>
      ) : (
        "Your answer"
      )}
    </div>
  );
};

const Dnd = () => {
  const { answers } = useGenerateAnswer();
  const [droppedAnswer, setDroppedAnswer] = useState(null);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (event) => {
    setDraggingItem(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;
    const selectedAnswer = answers.find(
      (a) => a.value.toString() === active.id
    );

    if (over?.id === "dropzone") {
      setDroppedAnswer(selectedAnswer);
    }

    setDraggingItem(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="quiz-container">
        <div className="answers-container">
          {answers.map((answer) => (
            <AnswerCard
              key={answer.value}
              id={answer.value.toString()}
              text={answer.value.toString()}
              isDropped={droppedAnswer?.value === answer.value}
              isDragging={draggingItem === answer.value.toString()}
            />
          ))}
        </div>
        <DropZone droppedAnswer={droppedAnswer} />
        {droppedAnswer && (
          <div
            className={droppedAnswer.isCorrect ? "correct-msg" : "wrong-msg"}
          >
            {droppedAnswer.isCorrect
              ? "Correct!"
              : "Your answer is wrong. Try again!"}
          </div>
        )}
      </div>
    </DndContext>
  );
};

export default Dnd;
