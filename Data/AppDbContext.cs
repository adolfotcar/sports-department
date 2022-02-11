using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SportsDepartment.Models;

namespace SportsDepartment.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext (DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<SportsDepartment.Models.AppUser> AppUser { get; set; }

        public DbSet<SportsDepartment.Models.Neighborhood> Neighborhood { get; set; }

        public DbSet<SportsDepartment.Models.Teacher> Teacher { get; set; }

        public DbSet<SportsDepartment.Models.Modality> Modality { get; set; }

        public DbSet<SportsDepartment.Models.Student> Student { get; set; }
    }
}
