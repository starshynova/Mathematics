// import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
// import {useState} from "react";
// import './component.css';

// const AnswerCard = ({ id, text, isDropped }) => {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

//   const style = isDropped
//     ? { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
//     : {  };

//   // const style = {
//   //   transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "none",
//   //   transition: "transform 0.2s ease-in-out",
//   // };


//   return (
//     <div
//       ref={setNodeRef}
//       {...listeners}
//       {...attributes}
//       style={{ ...style }}
//       className="answer-card"
//     >
//       {text}
//     </div>
//   );
// };


// const DropZone = ({ droppedCard }) => {
//   const { setNodeRef } = useDroppable({ id: "dropzone" });

//   return (
//     <div
//       ref={setNodeRef}
//       className="drop-zone"
//     >
//       {/* {droppedCard && <AnswerCard id="dropped" text={droppedCard} isDropped={true} />} */}
//       <div className="drop-card">
//           {droppedCard}
//         </div>
//       {!droppedCard && "Перетащи сюда"}
//     </div>
//   );
// };

// const Quiz = () => {
//   // const handleDragEnd = (event) => {
//   //   if (event.over?.id === "dropzone") {
//   //     alert("Ответ принят!");
//   //   }
//   // };

//   // return (
//   //   <DndContext onDragEnd={handleDragEnd}>
//   //     <div className="flex flex-col items-center">
//   //       <AnswerCard id="correct" text="Правильный ответ" />
//   //       <AnswerCard id="wrong" text="Неправильный ответ" />
//   //       <DropZone />
//   //     </div>
//   //   </DndContext>
//   // );

//   const [droppedCard, setDroppedCard] = useState(null);

//   const handleDragEnd = (event) => {
//     const { over, active } = event;

//     if (over?.id === "dropzone") {
//       setDroppedCard(active.id === "answer" ? "Перетащи меня" : null);
//     }
//   };

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       <div className="dnd-zone">
//         {!droppedCard && <AnswerCard id="answer" text="Перетащи меня" />}
//         <DropZone droppedCard={droppedCard} />
//       </div>
//     </DndContext>
//   );
// };

// export default Quiz;



import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useState } from "react";

const initialAnswers = [
  { id: "1", text: "Ответ 1", correct: false },
  { id: "2", text: "Ответ 2", correct: false },
  { id: "3", text: "Ответ 3", correct: false },
  { id: "4", text: "Правильный ответ", correct: true },
];

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
        <div className="dropped-card">{droppedAnswer.text}</div>
      ) : (
        "Перетащи сюда"
      )}
    </div>
  );
};

const Quiz = () => {
  const [answers, setAnswers] = useState(initialAnswers);
  const [droppedAnswer, setDroppedAnswer] = useState(null);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (event) => {
    setDraggingItem(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;
    const selectedAnswer = answers.find((a) => a.id === active.id);

    if (over?.id === "dropzone") {
      // Если в drop-зоне уже есть ответ, вернуть его назад
      if (droppedAnswer) {
        setAnswers((prev) =>
          prev.map((a) =>
            a.id === droppedAnswer.id ? { ...a, isDropped: false } : a
          )
        );
      }

      // Перемещаем новый ответ в drop-зону
      setDroppedAnswer(selectedAnswer);
      setAnswers((prev) =>
        prev.map((a) =>
          a.id === active.id ? { ...a, isDropped: true } : a
        )
      );
    }

    setDraggingItem(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="quiz-container">
        <div className="answers-container">
          {answers.map((answer) => (
            <AnswerCard
              key={answer.id}
              id={answer.id}
              text={answer.text}
              isDropped={answer.isDropped}
              isDragging={draggingItem === answer.id}
            />
          ))}
        </div>
        <DropZone droppedAnswer={droppedAnswer} />
        {droppedAnswer && (
          <div className={droppedAnswer.correct ? "correct-msg" : "wrong-msg"}>
            {droppedAnswer.correct ? "Правильно!" : "Неправильно!"}
          </div>
        )}
      </div>
    </DndContext>
  );
};

export default Quiz;
