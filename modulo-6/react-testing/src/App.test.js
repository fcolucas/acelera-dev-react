import React from "React";
import App from "./App";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "./Home";

it("deve renderizar a página inicial do usuário não logado", () => {
  const props = {
    isLoggedIn: false,
    username: null
  }
  const app = mount(<App {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})

it("deve renderizar a página inicial do usuário logado (Heisenberg)", () => {
  const props = {
    isLoggedIn: true,
    username: "Heisenberg"
  }
  const app = mount(<App {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})

it("deve renderizar a página inicial do usuário sem tarefas", () => {
  const props = {
    isLoggedIn: true,
    username: "Jessie"
  }
  const app = mount(<App {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})

// it("deve renderizar a página inicial do usuário não conectado", () => {
//   const props = {
//     isLoggedIn: false,
//     username: null
//   }
//   const app = mount(<App {...props} />)

//   //Checking output
//   expect(app.find(Home)).toHaveLength(0);
//   expect(app.find('p').at(0).text()).toEqual("Hello, visitor. Sign in to continue.");
// })

// it("deve renderizar a página inicial do usuário logado(Heisenberg)", () => {
//   const props = {
//     isLoggedIn: true,
//     username: "Heisenberg"
//   }
//   const app = mount(<App {...props} />)

//   //Checking output
//   expect(app.find(Home)).toHaveLength(1)
//   expect(app.find('p').at(0).text()).toEqual("Welcome, Heisenberg!")
  
//   expect(app.find('li')).toHaveLength(4)
//   expect(app.find('li').at(0).text()).toEqual("8am - Chemistry classes at school")
//   expect(app.find('li').at(1).text()).toEqual("12:30pm - Meet Jesse for lunch")
//   expect(app.find('li').at(2).text()).toEqual("15pm - Meet Gus at the Pollos Hermanos")
//   expect(app.find('li').at(3).text()).toEqual("20pm - Dinner by the pool with Hank and Marie")
// })

// it("deve renderizar a página inicial para usuário logado sem tarefas", () => {
//   const props = {
//     isLoggedIn: true,
//     username: "Jessie"
//   }
//   const app = mount(<App {...props} />)

//   //Checking output
//   expect(app.find(Home)).toHaveLength(1)
//   expect(app.find('p').at(0).text()).toEqual("Welcome, Jessie!")

//   expect(app.find('li')).toHaveLength(0)
// })