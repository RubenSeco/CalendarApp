import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice";
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates";

describe('Prueba en calendarSlice', () => {

  test('Debe regresar el estado por defecto', () => {

    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);

  });

  test('onSetActiveEvent debe activar el evento', () => {
    const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]));
    expect(state.activeEvent).toEqual(events[0]);


  });

  test('onAddNewEvent debe agregar un evento', () => {

    const newEvent = {
      id: "3",
      start: new Date("2023-03-06 20:32:00"),
      end: new Date("2023-03-06 22:32:00"),
      title: "Cumpleaños de Juan",
      notes: "Alguna nota de Juan",
    };

    const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));
    expect(state.events).toEqual([...events, newEvent]);

  });
  test('onUpdateEvent debe actualizar un evento', () => {

    const updatedEvent = {
      id: "1",
      start: new Date("2023-03-06 20:32:00"),
      end: new Date("2023-03-06 22:32:00"),
      title: "Cumpleaños de Pedro",
      notes: "Alguna nota de Pedro",
    };
    const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));
    expect(state.events).toContain(updatedEvent);

  });

  test('onDeleteEvent debe borrar el evento activo', () => {

    // calendarWithActiveEventState
    const deletedEvent = {
      id: "3",
      start: new Date("2023-03-06 20:32:00"),
      end: new Date("2023-03-06 22:32:00"),
      title: "Cumpleaños de Juan",
      notes: "Alguna nota de Juan",
    };

    const state = calendarSlice.reducer(calendarWithEventsState, onDeleteEvent(deletedEvent));
    expect(state.events).not.toContain(deletedEvent);

  });

  test('onLoadEvents debe establecer los eventos', () => {
    // initialState

    const state = calendarSlice.reducer(initialState, onLoadEvents(events));
    expect(state.events).not.toBeNull();

  });

  test('onLogoutCalendar debe limpiar el estado', () => {
    // calendarWithActiveEventState  
    const state = calendarSlice.reducer(calendarWithEventsState, onLogoutCalendar());
    expect(state).toEqual(initialState);


  });

});