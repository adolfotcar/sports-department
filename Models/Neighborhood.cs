using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace SportsDepartment.Models
{
    [Table("Neighborhoods")]
    public class Neighborhood
    {
        public int NeighborhoodId { get; set; }
        public string Name { get; set; }
    }
}