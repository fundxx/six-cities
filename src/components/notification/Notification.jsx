import React, {useCallback} from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import "./notification.css";

import {
  selectors,
  actions,
} from "Project/redux/notifications";

import Item from "./notification-item/Item";

const Notification = (_props) => {
  const items = useSelector(selectors.getNoticeItems);
  const dispatch = useDispatch();

  const handleRemove = useCallback((id) => {
    dispatch(actions.removeNotification(id));
  }, [actions.removeNotification]);

  return (
    <div className="notification">
      {items.map((it = {}) => {
        return (
          <Item key={it.id}
            item={it}
            onRemove={handleRemove}/>
        );
      })}
    </div>
  );
};

export default Notification;
