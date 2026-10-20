const PIN_COLORS = ['#d62f3a', '#1f6fe5', '#23a455', '#f2b705', '#8a3ffc', '#e8590c'];

const ITEM_TYPES = {
  note: {
    label: 'Note',
    hint: 'A quick thought on a sticky note.',
    fields: { title: 'Heading (optional)', body: 'Note' },
    papers: ['#fff27a', '#ffd166', '#b8f2a0', '#9be7f0', '#ffb3a7', '#f9a8d4'],
    style: 'sticky',
    font: 'hand',
    width: 170,
    maxTilt: 4,
    fastener: 'pin',
  },
  task: {
    label: 'To-do list',
    hint: 'One task per line. Tick tasks off right on the board.',
    fields: { title: 'List name', body: 'Tasks (one per line)' },
    papers: ['#ffffff', '#fdfdf6'],
    style: 'lined',
    font: 'print',
    width: 210,
    maxTilt: 2,
    fastener: 'pin',
  },
  idea: {
    label: 'Idea',
    hint: 'Something worth exploring later.',
    fields: { title: 'The idea', body: 'Details (optional)' },
    papers: ['#ffe066', '#ffc078', '#a5d8ff'],
    style: 'idea',
    font: 'marker',
    width: 180,
    maxTilt: 6,
    fastener: 'tape',
  },
  quote: {
    label: 'Quote',
    hint: 'Motivation, a line from a book, anything you want to keep seeing.',
    fields: { title: 'Who said it? (optional)', body: 'Quote' },
    papers: ['#ffffff', '#f8f9fa'],
    style: 'card',
    font: 'marker',
    width: 250,
    maxTilt: 2,
    fastener: 'two-pins',
  },
  reminder: {
    label: 'Reminder',
    hint: 'A date to keep in mind. It gets a red outline when the day arrives.',
    fields: { title: 'What', date: 'When' },
    papers: ['#ff8787', '#ffa94d', '#63e6be'],
    style: 'tag',
    font: 'print',
    width: 150,
    maxTilt: 5,
    fastener: 'pin',
  },
};


function pickLook(typeKey) {
  const type = ITEM_TYPES[typeKey];
  const pick = (list) => list[Math.floor(Math.random() * list.length)];
  const tilt = (Math.random() * 2 - 1) * type.maxTilt;
  return {
    paper: pick(type.papers),
    pin: pick(PIN_COLORS),
    tilt: Math.round(tilt * 10) / 10,
  };
}