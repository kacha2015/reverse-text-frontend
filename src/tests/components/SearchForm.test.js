describe('All test about SearchForm', () => {

    test('should have not empty value the searchForm', () => {

      const form = {
        text: 'hello'
      }

      expect(form.text).not.toBe('');
        
    })
    
    
})
