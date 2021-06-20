import { Switch, Route } from "react-router-dom";

import { CONTACTS_URL } from '../constants/navigation'
import AddContactContainer from "../containers/AddContactContainer";
import ContactDetailsContainer from "../containers/ContactDetailsContainer";
import ContactsContainer from "../containers/ContactsContainer";

const Routes = () => {
  return (
    <Switch>
      <Route
        path={CONTACTS_URL}
        exact
        component={ContactsContainer}
      />
      <Route
        path={`${CONTACTS_URL}/add`}
        exact
        component={AddContactContainer}
      />
      <Route
        path={`${CONTACTS_URL}/edit/:id`}
        exact
        render={(props) => <AddContactContainer {...props} isEdit />}
      />
      <Route
        path={`${CONTACTS_URL}/:id`}
        exact
        component={ContactDetailsContainer}
      />
    </Switch>
  )
}

export default Routes;
