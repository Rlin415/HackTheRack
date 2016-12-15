const retailSchema = {
  name: String,
  divisions: [
    {
      name: String,
      departments: [
        {
          name: String,
          classes: [
            {
              name: String,
              sub_classes: [
                {
                  name: String,
                  items: [
                    {
                      name: String
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default retailSchema;
