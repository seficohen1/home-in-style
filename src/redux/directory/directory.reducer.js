const INITIAL_STATE = {
  sections: [
    {
      title: 'BEDROOM',
      image:
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80',
      id: 1,
      linkUrl: 'store/bedroom',
    },
    {
      title: 'BATHROOM',
      image:
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80',
      id: 2,
      linkUrl: 'store/bathroom',
    },
    {
      title: 'KITCHEN',
      image:
        'https://images.unsplash.com/photo-1596205250168-c3583813eea0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      id: 3,
      linkUrl: 'store/kitchen',
    },
    {
      title: 'OUTDOOR & MORE',
      image:
        'https://images.unsplash.com/photo-1585917641362-9fbb6fcfc371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1207&q=80',
      id: 4,
      size: 'large',
      linkUrl: 'store/outdoor&more',
    },
    {
      title: 'LIVING ROOM',
      image:
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      id: 5,
      size: 'large',
      linkUrl: 'store/livingroom',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
