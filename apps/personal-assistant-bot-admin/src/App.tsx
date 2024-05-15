import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { ReminderList } from "./reminder/ReminderList";
import { ReminderCreate } from "./reminder/ReminderCreate";
import { ReminderEdit } from "./reminder/ReminderEdit";
import { ReminderShow } from "./reminder/ReminderShow";
import { IntegrationList } from "./integration/IntegrationList";
import { IntegrationCreate } from "./integration/IntegrationCreate";
import { IntegrationEdit } from "./integration/IntegrationEdit";
import { IntegrationShow } from "./integration/IntegrationShow";
import { AutomationList } from "./automation/AutomationList";
import { AutomationCreate } from "./automation/AutomationCreate";
import { AutomationEdit } from "./automation/AutomationEdit";
import { AutomationShow } from "./automation/AutomationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Personal Assistant Bot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Reminder"
          list={ReminderList}
          edit={ReminderEdit}
          create={ReminderCreate}
          show={ReminderShow}
        />
        <Resource
          name="Integration"
          list={IntegrationList}
          edit={IntegrationEdit}
          create={IntegrationCreate}
          show={IntegrationShow}
        />
        <Resource
          name="Automation"
          list={AutomationList}
          edit={AutomationEdit}
          create={AutomationCreate}
          show={AutomationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
