import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useState, useEffect } from "react";
import useGenerateAnswer from "../hooks/useGenerateAnswer.jsx";
import { useCount } from "../hooks/useCount.jsx";
import "./component.css";
import { useParams } from "react-router-dom";
import useGenerateExample from "../hooks/useGenerateExample.jsx";

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
        "Put your answer here using drag and drop"
      )}
    </div>
  );
};

const Dnd = ({ resetDropZone }) => {
  const { operation } = useParams();
  const { answers } = useGenerateAnswer();
  const { answerCalculation, setCorrectAnswer } = useCount();
  const [droppedAnswer, setDroppedAnswer] = useState(null);
  const [draggingItem, setDraggingItem] = useState(null);
  const { correctResult } = useGenerateExample(operation);

  useEffect(() => {
    setDroppedAnswer(null);
  }, [resetDropZone]);

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
      answerCalculation(selectedAnswer.value, correctResult);
    }

    setDraggingItem(null);
  };

  useEffect(() => {
    if (droppedAnswer) {
      setCorrectAnswer(droppedAnswer.isCorrect ? "Correct!" : "Try again!");
    }
  }, [droppedAnswer]);

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
      </div>
    </DndContext>
  );
};

export default Dnd;
