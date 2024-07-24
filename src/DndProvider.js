import React from 'react';
import { DndProvider as DndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DndProvider = ({ children }) => {
  return <DndContext backend={HTML5Backend}>{children}</DndContext>;
};

export default DndProvider;
