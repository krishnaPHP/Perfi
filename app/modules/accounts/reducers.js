import { handleActions } from 'redux-actions';
import types from './types';
import { chartPalette } from '../../styles';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';


const createAccount = (props) => {
  const {
    name,
    initialBalance = 10,
    initialDate = new Date(),
    color = chartPalette.blue500,
  } = props;

  return {
    name, initialBalance, initialDate, color,
  };
};


//    "accounts": Object {
//        "byId": Object {
//            "0": Object {
//                "color": "#27ae60",
//                  "icon": "credit-card",
//                  "id": "0",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "name": "Card",
//                },
//            "1": Object {
//                "color": "#27ae60",
//                  "icon": "cash-multiple",
//                  "id": "1",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "name": "Cash",
//                },
//            "2": Object {
//                "color": "#27ae60",
//                  "icon": "cash-multiple",
//                  "id": "2",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "name": "Test 1",
//                },
//            "3": Object {
//                "color": "#27ae60",
//                  "icon": "cash-multiple",
//                  "id": "3",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "name": "Test 2",
//                },
//          },
//        "ids": Array [
//            "3",
//            "2",
//            "1",
//            "0",
//          ],
//      },


const defaultAccounts = [
  createAccount({ name: 'Card', color: chartPalette.purple500 }),
  createAccount({ name: 'Cash', color: chartPalette.orange500 }),
  createAccount({ name: 'Business', color: chartPalette.pink500 }),
  createAccount({ name: 'Shares' }),
];

const initialState = insertAll({}, defaultAccounts);

const accountsReducer = handleActions({
  [types.CREATE_ACCOUNT]: (state, { payload }) => insert(state, createAccount({
    ...payload,
    balance: payload.initialBalance,
  })),
  [types.UPDATE_ACCOUNT]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_ACCOUNT]: (state, { payload }) => removeId(state, payload),
}, initialState);

export default accountsReducer;
