
    function limitInput(element, maxLength) {
      if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength);
      }
    }

    function limitInput(element, maxLength) {
        element.value = element.value.replace(/[^a-zA-Z0-9]/g, '');
    }
    if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength);
      }