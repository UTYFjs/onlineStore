export const sendMetrik = (type, idYandexMetrik) => {
  //window.ym(96192549, 'reachGoal', 'testJSEvent');
  window.ym(96192549, type, idYandexMetrik);
};
