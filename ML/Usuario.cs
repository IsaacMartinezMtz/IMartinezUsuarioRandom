using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ML
{
    public class Usuario
    {
        public string Nombre { get; set; }
        public string CorreoElectronico { get; set; }
        public string Dirrecion { get; set; }
        public string Genero { get; set; }
        public List<object> Usuarios { get; set; }
    }
}
