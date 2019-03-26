(() => commentsArr.filter((individualComment) => {
      for (let i = 0; i > orwellArr.length; i++) {
        if (individualComment.toLowerCase().includes(orwellArr[i].toLowerCase())) {
          return false
        }
      }
    }))()
  }