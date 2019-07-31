using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AciSelect
{
    public class Selec2Data
    {
        public Selec2Data(dynamic Value, string Text)
        {
            this.Text = Text;
            this.Value = Value;
        }

        public Selec2Data(dynamic Value, string Text, bool Selected)
        {
            this.Text = Text;
            this.Value = Value;
            this.Selected = Selected;
        }

        public dynamic Value { get; set; }
        public string Text { get; set; }
        public bool Selected { get; set; } = false;
    }
}
